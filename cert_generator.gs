function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [
    {name: "Vytvořit osvědčení (s datem narození)", functionName: "ReadValues"},
    {name: "Vytvořit osvědčení (bez data narození)", functionName: "ReadValuesBezNarozeni"}
  ];
  ss.addMenu("Export", menuEntries);
}


function ReadValues(){
var sheet = SpreadsheetApp.getActiveSheet();
var data = sheet.getDataRange().getValues();
var header = data.shift();
Logger.log(data)
 
for (index = 0; index < data.length; ++index) {
    console.log(data[index]);
    var polozka = data[index];
    Create_PDF( {
	jmeno: polozka[0],
	narozeni: polozka[1],
	jmenoAkce: polozka[2],
	datumKonani: polozka[3],
	datumVytvoreni: polozka[4],
});
}

}

function Create_PDF(info) {
 
 const PDF_folder = DriveApp.getFolderById("1Eti9oLCNB-NOUei1sFi7Ad7pnLblUFmF");
 const TEMP_FOLDER = DriveApp.getFolderById("1vd6_96WedRG7ROtSxulz62PzO6dom9ky");
  const PDF_Template = DriveApp.getFileById("1fJdw7nEyGTdBIto7mvDOfZz5Olt8MwMJxfjT85vcKzU");
 
  const newTempFile = PDF_Template.makeCopy(TEMP_FOLDER);
  const  OpenDoc = DocumentApp.openById(newTempFile.getId());
 const body = OpenDoc.getBody();
  
 console.log(body);
  
   body.replaceText("{jmeno}", info['jmeno']);
  body.replaceText("{narozeni}", info['narozeni']);
   body.replaceText("{jmenoAkce}", info['jmenoAkce']);
  body.replaceText("{datumKonani}", info['datumKonani']);
  body.replaceText("{datumVytvoreni}", info['datumVytvoreni']);
 
  OpenDoc.saveAndClose();
  
 
  const BLOBPDF = newTempFile.getAs(MimeType.PDF);
  const pdfFile =  PDF_folder.createFile(BLOBPDF).setName(info['jmeno']);
  console.log("The file has been created ");
  
  return pdfFile;
 
}



function ReadValuesBezNarozeni(){
var sheet = SpreadsheetApp.getActiveSheet();
var data = sheet.getDataRange().getValues();
var header = data.shift();
Logger.log(data)
 
for (index = 0; index < data.length; ++index) {
    console.log(data[index]);
    var polozka = data[index];
    Create_PDFBezDataNarozeni( {
	jmeno: polozka[0],
	jmenoAkce: polozka[2],
	datumKonani: polozka[3],
	datumVytvoreni: polozka[4],
});
}

}

function Create_PDFBezDataNarozeni(info) {
 
 const PDF_folder = DriveApp.getFolderById("1Eti9oLCNB-NOUei1sFi7Ad7pnLblUFmF");
 const TEMP_FOLDER = DriveApp.getFolderById("1vd6_96WedRG7ROtSxulz62PzO6dom9ky");
  const PDF_Template = DriveApp.getFileById("1hP5FncAC4IQwXzcVB2IrdGEeF3k_rwvGJVoV0Hh36Zo");
 
  const newTempFile = PDF_Template.makeCopy(TEMP_FOLDER);
  const  OpenDoc = DocumentApp.openById(newTempFile.getId());
 const body = OpenDoc.getBody();
  
 console.log(body);
  
   body.replaceText("{jmeno}", info['jmeno']);
   body.replaceText("{jmenoAkce}", info['jmenoAkce']);
  body.replaceText("{datumKonani}", info['datumKonani']);
  body.replaceText("{datumVytvoreni}", info['datumVytvoreni']);
 
  OpenDoc.saveAndClose();
  
 
  const BLOBPDF = newTempFile.getAs(MimeType.PDF);
  const pdfFile =  PDF_folder.createFile(BLOBPDF).setName(info['jmeno']);
  console.log("The file has been created ");
  
  return pdfFile;
 
}
