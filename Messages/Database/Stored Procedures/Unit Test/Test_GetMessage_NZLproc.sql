CREATE OR ALTER PROCEDURE [dbo].[Test_GetMessage_NZL]
AS

DECLARE @Expected		NVARCHAR(MAX),
		@CountryCode	NVARCHAR(3),
		@MessageDate	DATETIME,
		@TestName	NVARCHAR(MAX),
		@TestFooter		NVARCHAR(MAX)

/********************************************************************************************************************************
TEST SET:
	Country Code: NZL
*********************************************************************************************************************************/
SET @CountryCode = 'NZL'
SET @MessageDate = '01/01/2001'
SET @TestFooter = ' Country Code: ' + @CountryCode + ' | Date: ' + CONVERT(VARCHAR(20), @MessageDate, 120)
SET @TestName = N'Message NULL, date is before Jan 01 2021' + @TestFooter
EXEC	[dbo].[Assert_Null] @TestName, @CountryCode, @MessageDate

SET @MessageDate = '01/01/2021'
SET @Expected = 'Kia Ora from September 2021'
SET @TestFooter = ' Country Code: ' + @CountryCode + ' | Date: ' + CONVERT(VARCHAR(20), @MessageDate, 120)
SET @TestName = N'Incorrect Expected Message' + @TestFooter
EXEC	[dbo].[Assert_Not_Equal] @TestName, @CountryCode, @MessageDate, @Expected

SET @MessageDate = '09/01/2021'
SET @TestFooter = ' Country Code: ' + @CountryCode + ' | Date: ' + CONVERT(VARCHAR(20), @MessageDate, 120)
SET @TestName = N'Get NZL message for Sep 2021' + @TestFooter
EXEC	[dbo].[Assert_Equal] @TestName, @CountryCode, @MessageDate, @Expected

SET @MessageDate = '09/01/2022'
SET @Expected = 'Kia Ora from September 2022'
SET @TestFooter = ' Country Code: ' + @CountryCode + ' | Date: ' + CONVERT(VARCHAR(20), @MessageDate, 120)
SET @TestName = N'Get NZL message for 2022' + @TestFooter
EXEC	[dbo].[Assert_Equal] @TestName, @CountryCode, @MessageDate, @Expected

SET @MessageDate = '09/01/2023'
SET @Expected = 'Kia Ora from September 2022'
SET @TestFooter = ' Country Code: ' + @CountryCode + ' | Date: ' + CONVERT(VARCHAR(20), @MessageDate, 120)
SET @TestName = N'Should still get NZL message for 2022' + @TestFooter
EXEC	[dbo].[Assert_Equal] @TestName, @CountryCode, @MessageDate, @Expected
GO