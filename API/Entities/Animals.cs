using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Animals
    {
        public int Id { get; set; }
        public string CommonName { get; set; }
        public string BinomialName { get; set; }
        public string Kingdom { get; set; }
        public string Phylum { get; set; }
        public string Class { get; set; }
        public string Order { get; set; }
        public string SubOrder { get; set; }
        public string Family { get; set; }
        public string SubFamily { get; set; }
        public string Genus { get; set; }
        public string Species{ get; set; }
    }
}