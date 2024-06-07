CREATE OR ALTER PROCEDURE [dbo].[CreateDefaultMessages]

AS

/************************
Adding initial values to table based from example.
************************/

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('AAA','Jan 2021','Hello from 2021','01/01/2021 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('AAA','Jan 2022','Hello from 2022','01/01/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('AAA','Jan 2023','Hello from 2023','01/01/2023 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('NZL','NZ 2021','Kia Ora from September 2021','09/01/2021 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('NZL','NZ 2022','Kia Ora from September 2022','09/01/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('GBR','UK 2021','Good day from UK September 2021','09/01/2021 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('GBR','UK 2022','Good day from UK September 2022','09/01/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('GBR','UK Dec 2021','Happy Holidays from UK 2021-2022','12/20/2021 00:00:00.000', '01/20/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('GBR','UK Dec 2022','Happy Holidays from UK 2022-2023','12/20/2022 00:00:00.000', '01/20/2023 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('FRA','FR Dec 2021','Bonnes fêtes from FR 2021-2022','12/20/2021 00:00:00.000', '01/20/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('FRA','FR Dec 2022','Bonnes fêtes from FR 2022-2023','12/20/2022 00:00:00.000', '01/20/2023 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('PHL','PH 2021','Mabuhay from PH September 2021','09/01/2021 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate)
VALUES ('PHL','PH 2022','Mabuhay from PH September 2022','09/01/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('PHL','PH Dec 2021','Maligayang Pasko from PH 2021-2022','12/20/2021 00:00:00.000', '01/20/2022 00:00:00.000')

INSERT INTO [dbo].[Messages] (CountryCode, Title, [Message], StartDate, EndDate)
VALUES ('PHL','PH Dec 2022','Maligayang Pasko from PH 2022-2023','12/20/2022 00:00:00.000', '01/20/2023 00:00:00.000')

GO