using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using LEGOInterview.Extensions;
using LEGOInterview.Model;
using LEGOInterview.Model.RandomUser;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace LEGOInterview.Controllers
{
    [Produces("application/json")]
    [Route("api/RandomUser")]
    public class RandomUserController : Controller
    {
        [HttpGet]
        public List<Person> Get()
        {
            List<Person> result = new List<Person>();
            var name = new Model.Name
            {
                FirstName = "Alin Stefan",
                LastName = "Olaru"
            };
            var location = new Model.Location
            {
                City = "City",
                Postcode = "Postcode",
                State = "State",
                Street = "Street"
            };
            var user = new Person
            {
                Id = "xshteff",
                Name = name,
                Email = "alinstefanolaru@gmail.com",
                Phone = "+45 12 34 56 78",
                Address = location,
                Picture = "https://avatars1.githubusercontent.com/u/9394141?s=460&v=4",
                Nationality = "RO",
            };
            result.Add(user);
            return result;
        }

        [HttpGet("{id}/{nationalities}", Name = "Get")]
        public async Task<List<Person>> GetAsync(int id, string nationalities)
        {
            List<Person> result = await LoadNewUsers(id, nationalities);
            return result;
        }

        public async Task<List<Person>> LoadNewUsers(int count, string nationalities)
        {
            var users = new List<Person>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://randomuser.me/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync($"api/?nat={nationalities}&inc=name,phone,email,location,picture,login,nat&results={count}");
                if (response.IsSuccessStatusCode)
                {
                    string json = await response.Content.ReadAsStringAsync();
                    var userResponse = JsonConvert.DeserializeObject<RootObject>(json);
                    foreach (var randomUser in userResponse.Results)
                    {
                        var name = new Model.Name
                        {
                            FirstName = randomUser.Name.First.FirstToUpper(),
                            LastName = randomUser.Name.Last.FirstToUpper()
                        };
                        var location = new Model.Location
                        {
                            City = randomUser.Location.City.FirstToUpper(),
                            Postcode = randomUser.Location.Postcode,
                            State = randomUser.Location.State.FirstToUpper(),
                            Street = randomUser.Location.Street.Name.FirstToUpper()
                        };
                        var user = new Person
                        {
                            Id = randomUser.Login.Username,
                            Name = name,
                            Email = randomUser.Email,
                            Phone = randomUser.Phone,
                            Address = location,
                            Picture = randomUser.Picture.Large,
                            Nationality = randomUser.Nat,
                        };
                        users.Add(user);
                    }
                }
            }

            return users;
        }
    }
}
