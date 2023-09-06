const elementToPrint = document.getElementById("resume");
const printOptions = {
  margin: 5,
  filename: "pawel_gasiorowski_resume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
};

const rodoText = `      I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of
     Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliamentand of the Council of 27 April 2016 on the protection of natural persons
     with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).`;

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
        rodoText,
        pdf.internal.pageSize.getWidth() - 214,
        pdf.internal.pageSize.getHeight() - 10,
        "justify"
      );
    }
  })
  .save();

this.elementPdf.clear();
