function btnAcceuil(type) {
    if($("." + type).css("display") == "none") {
        $("." + type).css("display", "flex")
    } else {
        $("." + type).css("display", "none");
    }
}