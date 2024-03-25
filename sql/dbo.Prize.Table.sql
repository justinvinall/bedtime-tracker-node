USE [BedtimeTracker];
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

CREATE TABLE [dbo].[Prize](
	[PrizeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[ImageUrl] [nvarchar](2048) NULL,
	[Priority] [int] NULL,
	
	CONSTRAINT [PK_Prize] PRIMARY KEY CLUSTERED ([PrizeId] ASC)
);
