async function searchByZipcode(zipcode: string) {
  type Response = {
    message?: string,
    results?: Result[],
    status: number
  }
  type Result = {
    address1?: string
    address2?: string
    address3?: string
    kana1?: string
    kana2?: string
    kana3?: string
    prefcode?: string
    zipcode?: string
  }

  const response: Response = await (await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)).json();
  if (!response.results) return [];

  const addressList: Address[] = response.results.map((result) => {
    return {
      address: `${result.address1}${result.address2}${result.address3}`,
      addressKana: `${result.kana1}${result.kana2}${result.kana3}`,
      zipcode: `${result.zipcode}`
    };
  });
  return addressList;
}

export {searchByZipcode};
