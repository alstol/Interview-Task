namespace LEGOInterview.Extensions
{
    using System.Linq;

    public static class StringExtensions
    {
            public static string FirstToUpper(this string text)
            {
                if (string.IsNullOrWhiteSpace(text))
                {
                    return text;
                }

                return char.ToUpper(text.First()) + text.Substring(1);
        }
    }
}