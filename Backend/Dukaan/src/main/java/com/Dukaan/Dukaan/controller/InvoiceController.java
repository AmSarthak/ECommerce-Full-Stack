package com.Dukaan.Dukaan.controller;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Dukaan.Dukaan.model.Items;
import com.Dukaan.Dukaan.service.AddToCartServiceLayer;
import com.itextpdf.io.source.ByteArrayOutputStream;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;

@RestController
public class InvoiceController {

    private final AddToCartServiceLayer addToCartServiceLayer;

    public InvoiceController(AddToCartServiceLayer addToCartServiceLayer){
        this.addToCartServiceLayer = addToCartServiceLayer;
    }


    @GetMapping("/export-pdf")
    public ResponseEntity<byte[]> exportPdf() throws Exception {
    List<Items> items = addToCartServiceLayer.getCartItems();

    if(items.size()==0){
        return ResponseEntity.badRequest().body(null);
    }
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    PdfWriter writer = new PdfWriter(out);
    PdfDocument pdfDoc = new PdfDocument(writer);
    Document document = new Document(pdfDoc);

    document.add(new Paragraph("Item List"));

    Table table = new Table(2);
    table.addCell("Title");
    table.addCell("Price");

    for (Items item : items) {
        table.addCell(item.getTitle());
        table.addCell(String.valueOf(item.getPrice()));
    }

    document.add(table);
    document.add(new Paragraph("Total Payable   $" + addToCartServiceLayer.getTotalPrice()));
    document.close();

    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=items.pdf")
            .contentType(MediaType.APPLICATION_PDF)
            .body(out.toByteArray());
    }

}
