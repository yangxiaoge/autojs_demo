var url = "http://www.tuling123.com/openapi/api";
r = http.postJson(url, {
    key: "65458a5df537443b89b31f1c03202a80",
    info: "hello",
    userid: "1",
});
toastLog(r.body.string());
