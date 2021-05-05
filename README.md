# CertificateGenerator4Sheets

_Generate PDFs from simple google sheet tables!_

Made for work from various scraps and help of @randalfien, takes in data from google sheets and generates pdf
Built on the fundamentals laid by: https://medium.com/swlh/create-pdf-using-googleapps-script-6d974f3f06c4
Vastly helped by @Randalfien (collaborator in this project yay)

It should run in a Google sheet, made for this use case scenario with unlimited rows but only 5 columns (ignores headers)

Made for creating certificates with name, birth date, occasion description, when it took place and when it was created (you can easily edit those via script editor though and add new columns to track as well):

![image](https://user-images.githubusercontent.com/26422126/117192882-832e5d00-ade2-11eb-9d53-10cde59f6e14.png)

It takes data in each row, puts them into Template google document and then generates PDF.

**Installation!**
Make sure you have:
1. sheet to run this script on ready (use Tools - Script Editor to copy paste it there, name does not matte)
2. google docs template with {placeholder} fields (see image below) and its id (in URL)
3. TEMP Gdrive folder id (in URL)
4. Target GDrive folder id (in URL)

Replace those inside script and you're all set.

These are important and you should change them to your own:
![image](https://user-images.githubusercontent.com/26422126/117193654-6ba3a400-ade3-11eb-9b5f-3fb052de2c9b.png)


Our template in Gdocs looks like this:

![image](https://user-images.githubusercontent.com/26422126/117193445-28493580-ade3-11eb-8913-513cd0505b63.png)

As you're at Github it all should be pretty clear but perhaps shoot some question and we might answer! 
