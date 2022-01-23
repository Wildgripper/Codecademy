function getComments(array) {

    let regex = /^[#]/i;
    let strings = array.filter(str => regex.test(str));
    let result = strings.join('<br>');

    return result;
}


let comments = ["#comment", "#othercomment", "and another"];

getComments(comments);