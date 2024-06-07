CREATE TABLE [dbo].[Messages] (
    [Id]			[BIGINT] IDENTITY(1,1) NOT NULL,
    [CountryCode]	[NVARCHAR](3) NOT NULL,
	[Title]			[NVARCHAR](100) NOT NULL,
	[Message]		[NVARCHAR](MAX) NOT NULL,
    [StartDate]		[DATETIME] NOT NULL,
	[EndDate]		[DATETIME] NULL,

	CONSTRAINT [PK__Messages] PRIMARY KEY CLUSTERED
	(
		[Id] ASC
	),
	CONSTRAINT [PK__Messages_CountryCode_StartDate] UNIQUE(CountryCode, StartDate) 
)
