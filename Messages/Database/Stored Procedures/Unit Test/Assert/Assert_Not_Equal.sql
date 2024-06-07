CREATE OR ALTER PROCEDURE [dbo].[Assert_Not_Equal]
	@TestName		NVARCHAR(MAX),
	@CountryCode	NVARCHAR(3),
	@Date			DATETIME,
	@Expected		NVARCHAR(MAX)
AS

DECLARE	@Actual NVARCHAR(MAX)

EXEC	[dbo].[GetMessage]
		@CountryCode = @CountryCode,
		@MessageDate = @Date,
		@Message = @Actual OUTPUT

SELECT @TestName as 'Test Name', @Expected as Expected, @Actual as Actual, CASE WHEN(@Actual <> @Expected) THEN 'PASS' ELSE 'FAIL' END as Result

GO
