/**
 * 住所検索API呼び出し
 * @param {string!} zipcode
 * @return {Address[]}
 */
async function searchByZipcode(zipcode: string) {
  type ResponseBody = {
    message?: string;
    results?: Result[];
    status: number;
  };
  type Result = {
    address1?: string;
    address2?: string;
    address3?: string;
    kana1?: string;
    kana2?: string;
    kana3?: string;
    prefcode?: string;
    zipcode?: string;
  };

  const response = await fetch(
    `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`,
  );
  if (!response.ok) {
    alert('HTTP-Error: ' + response.status);
    return [];
  }
  const body: ResponseBody = await response.json();
  if (!body.results) return [];

  const addressList: Address[] = body.results.map((result) => {
    return {
      address: `${result.address1}${result.address2}${result.address3}`,
      addressKana: `${result.kana1}${result.kana2}${result.kana3}`,
      zipcode: `${result.zipcode}`,
    };
  });
  return addressList;
}

export {searchByZipcode};
