using System;
using System.Collections.Generic;

namespace MessageService.Models;

public partial class MessageItem
{
    public long Id { get; set; }

    public string CountryCode { get; set; } = null!;

    public string Title { get; set; } = null!;

    public string Message { get; set; } = null!;

    public DateTime StartDate { get; set; }

    public DateTime? EndDate { get; set; }
}
