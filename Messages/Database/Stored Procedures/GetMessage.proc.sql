CREATE OR ALTER PROCEDURE [dbo].[GetMessage]
	@CountryCode	[NVARCHAR](3),
    @MessageDate	[DATETIME],
	@Message		[NVARCHAR](MAX) OUTPUT
AS

SELECT TOP 1 @Message = temp.[Message] FROM 
(
	SELECT * 
	FROM [dbo].[Messages] m
	WHERE m.CountryCode = @CountryCode
		AND @MessageDate BETWEEN m.StartDate AND COALESCE(m.EndDate, GETUTCDATE())
	UNION ALL
	SELECT *
	FROM [dbo].[Messages] m
	WHERE NOT EXISTS (
		SELECT * 
		FROM [dbo].[Messages] m
		WHERE m.CountryCode = @CountryCode
			AND @MessageDate BETWEEN m.StartDate AND COALESCE(m.EndDate, GETUTCDATE()))
		AND m.CountryCode = 'AAA'
		AND @MessageDate >= m.StartDate
) temp
ORDER BY temp.StartDate DESC
GO
