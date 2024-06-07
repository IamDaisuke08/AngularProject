CREATE OR ALTER PROCEDURE [dbo].[Assert_Null]
	@TestName		NVARCHAR(MAX),
	@CountryCode	NVARCHAR(3),
	@Date			DATETIME
AS

DECLARE	@Actual NVARCHAR(MAX)

EXEC	[dbo].[GetMessage]
		@CountryCode = @CountryCode,
		@MessageDate = @Date,
		@Message = @Actual OUTPUT

SELECT @TestName as 'Test Name', NULL as Expected, @Actual as Actual, CASE WHEN(@Actual IS NULL) THEN 'PASS' ELSE 'FAIL' END as Result

GO
