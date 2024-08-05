"use server";

import { auth, sheets } from "googleapis";
import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(5, { message: "Email should provided." })
    .email({ message: "Please give valid email address" }),
  phone: z
    .string()
    .min(2, { message: "Phone number should provided." })
    .regex(phoneRegex, "Invalid Number!"),
});

export async function getSheetData(values) {
  try {
    const { name, email, phone } = formSchema.parse(values);
    const glAuth = await auth.getClient({
      projectId: "second-conquest-415715",
      credentials: {
        type: "service_account",
        project_id: "second-conquest-415715",
        private_key_id: "1ba8b07c35c50f216a7e392660a13786f5e52139",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgGo/cFAyM2dGL\nybeqO+ibYt/X/GbxCpG2q8fN2Z332QtPqMYa2TJIXC9b5NGrppNAE7PCwOrinthL\nFX3pdaOEPWujslo67fjENTvf6/+D7a65+TUwBe/ZNVQKoTfM56lDz/evdINqPSRb\nsxlPB6RZwzoflUE8lrvCQoyAlG+//Hbpa6ZDmfmrxmgEQjH2F6QWkCwyOzvRAAJ0\nqMKshB/1qgpgGJYDD1k1PDfMo22Hk7VY0+zK+2bO3jvMr49mZYVCmoNJEFRZtvGt\nSKlFTfYUu8G5CtgUzE6YKk6sYHJxrr5f036dCTstFu6/zYfx6RjJmjzN/AoNuvV/\n/QQZY83pAgMBAAECggEADSbB5oJush1eRLvTwXO+lM/anww65k5eer/d++CXeqIM\nHeKjrZOtdb2jMdtdypr97Ta6x+UWY7I6sz1RpE+5Btur43FmBitM/Aa7uspYtl9O\nb6+GRYkzqCWPBwirA6Vcs5QSzwMhayynY5JBG/gw1uu0D4Jsz6dw4VeSc0FCxZtp\nIIibKI1O0BTGruVSOab+S1HFL6zbA7wL7Ldb09KexH/mpxbMogNUW5KkNLkpg6mP\njCgTxgQS5+3/dXrkVZa7yYDKKRNoUNXSVM3NqPglZQMfZB6YZTFojy/mXd50ckfr\nrURzICbJ/ez5/Ex6OpppZXhIpEWMpVqPFn1nzd+C+QKBgQD8P4D2AK9HqV2cRNV8\nCnRuEM99FRX4yus/V8UdaHyP7IVqmkVPBZzt317RJGaxPzuRupLL+uO1j1NFAnPc\nBRLr1lSotdvnOupTUUGeIMan4OZeJ+SJQOPWeTVj4qwduFIzNaozA9EM9pudiHc2\nsft3Z482z0wCIYnRQ2wiVFGA/wKBgQDjb+RRqlL5idM+yjUfbI4MM0b5TTN11p4r\nkMGHgAoNf5SBfMamHt0pPsSFc4/KNLQMVw6tpzu1PeKZ5zsuOQw3sXWrDugvmaox\n0hnIh1IH9+SJ0wwuW/morAn7C2nklWSqxPpGogLrvFdhGzeHwlkyGRyWqkYAimXU\nbLl3LzfJFwKBgQDRlxpaTRtW2d0UGQWheTZgtcsRTVHiVQi+qvj3hHfrRkVc3C42\niJ1p8K1h7XL+V2HxpiqPHjnSA/LWZkFKUVT1bDMPs3uyV3uYGu4Aq48ksnP3TAJS\nIP6umCvKgO8uCpcSQcbXeJZcxRNsA5W6doxRHFUc34VyR9exbuoMZC8MlQKBgDnU\ngaGiRWbd/LDCia9r0tKXVzycvLEB2UYKkKr7i5LTFde2+mvS/Tk3lJC6SZ2IuR9K\nI5lUJIJ5Md0gRpQCPXEL1negWrl/wR7Z5WRvxBPynFHPMBG5oUmaNQ94X3yX3/js\nDRdYqpV2VmGCoiQK7tMmP3av5QzOJAZXfvEnOHARAoGBAI3h7tEO8qLncT+ncv0S\nWjTT6EvA36/5iRoi39aOrSdF3gYPP0t7CfwtphBBMZkW/yWxvmQC7/Js6ZPUa6bg\nHJjaQsklbyHcdU7daCHdmJuQISrX059a2KDo/Cs7nVGP8YPbk/X325bSpSluFB2l\nCtjGYj/st2PngPtudYPYyjkA\n-----END PRIVATE KEY-----\n",
        client_email:
          "check-765@second-conquest-415715.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = sheets({ version: "v4", auth: glAuth });

    const data = await glSheets.spreadsheets.values.append({
      spreadsheetId: "1aA5SbGjfwY9n200sjN9Ws3186PhV86F5_M-IKyXxKBg",
      range: "Sheet1!A:C",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, phone]],
      },
    });

    return { status: true };
  } catch (err) {
    return {
      status: false,
    };
    console.log(err);
  }
}
