using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FreeMemory
{
    public class Network
    {
        private static RestRequest AddToRequest(RestRequest restRequest, string json = null)
        {
            if (urlSegments != null)
            {
                foreach (var urlSegment in urlSegments)
                {
                    restRequest.AddUrlSegment(urlSegment.Name, urlSegment.Value);
                }
            }

            if (headers != null)
            {
                foreach (var header in headers)
                {
                    restRequest.AddHeader(header.Name, header.Value);
                }
            }

            if (!string.IsNullOrEmpty(json))
            {
                restRequest.AddHeader("Content-Type", "application/json");
                restRequest.AddParameter("application/json", json, ParameterType.RequestBody);
            }

            if (token != null)
            {
                restRequest.AddHeader("x-access-token", token.Token);
            }
            return restRequest;
        }

        private static RestClient CreateClient(string resource)
        {
            var restClient = new RestClient(resource) { Timeout = Options.timeOut };
            return restClient;
        }

        private static RestRequest CreateRequest(string resource, Method method, string parameterJson, TokenInfo token = null, UrlSegment[] urlSegments = null, Header[] headers = null)
        {
            var restRequest = new RestRequest(resource, method) { Timeout = Options.timeOut };
            restRequest = AddToRequest(restRequest, token, parameterJson, urlSegments, headers);

            return restRequest;
        }

        private static T DeserializeSnakeCase<T>(string json)
        {
            DefaultContractResolver contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new SnakeCaseNamingStrategy()
            };


            try
            {
                var resp = JsonConvert.DeserializeObject<T>(json, new JsonSerializerSettings
                {
                    ContractResolver = contractResolver,
                    Formatting = Formatting.Indented,
                });
                return resp;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
            }

            return default(T);
        }

        public async Task<T> GetResponse<T>(string resource, Method method, string parameterJson = null, UrlSegment[] urlSegments = null, Header[] headers = null)
        {
            var client = CreateClient(resource);
            var restRequest = CreateRequest(resource, method, parameterJson, Options.tokenInfo, urlSegments, headers);
            var response = await client.ExecuteTaskAsync(restRequest);

            var resp = DeserializeSnakeCase<T>(response.Content);

            return resp;
        }
    }
}
