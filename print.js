const elementToPrint = document.getElementById("resume");
const printOptions = {
  margin: 5,
  filename: "pawel_gasiorowski_resume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
};

html2pdf()
  .from(elementToPrint)
  .set(printOptions)
  .toPdf()
  .get("pdf")
  .then((pdf) => {
    const totalPages = pdf.internal.getNumberOfPages();

    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(7);
      pdf.setTextColor(150);

      // position of footer
      pdf.text(
        pdf.internal.pageSize.getWidth() - 214,
        pdf.internal.pageSize.getHeight() - 10,
        "justify"
      );
    }
  })
  .save();

this.elementPdf.clear();
