USE [BedtimeTracker];
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON

CREATE TABLE [dbo].[Bedtime](
	[BedtimeId] [int] IDENTITY(1,1) NOT NULL,
	[ChildId] [int] NOT NULL,
	[SleepStart] [datetime2] NOT NULL,
	[SleepEnd] [datetime2] NOT NULL,
	[Success] [bit] NOT NULL,
	[IsNap] [bit] NOT NULL,
	
	CONSTRAINT [PK_Bedtime] PRIMARY KEY CLUSTERED ([BedtimeId] ASC),
	CONSTRAINT [FK_Bedtime_Child] FOREIGN KEY ([ChildId]) REFERENCES [dbo].[Child]([ChildId])
);
