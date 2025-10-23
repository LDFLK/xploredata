export function getRuntimeConfig() {
  if (typeof window !== "undefined" && window.configs) {
    return window.configs;
  }

  return {
    apiUrl: "//localhost:8000",
    apiUrlService: "",
    version: "unknown",
  };
}

export function getApiBaseUrl() {
  console.log('this is the api gi service')
  console.log(getRuntimeConfig().apiUrl)
  return getRuntimeConfig().apiUrl;
}
