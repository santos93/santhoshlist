module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const value = (req.query.score || (req.body && req.body.score));
    let cibilScore = score(value);
    console.log(cibilScore);
    const responseMessage = value
        ? "Hello, your cibilscore is " + cibilScore 
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };   
}
    function score(value) {
    if (value <= 600) {
        return 'Bad';
    } 
    if (value > 600 && value < 800) {
        return 'Average';
    } 
    if (value >= 800 && value <= 900) {
        return 'Good';
    }
    else {
        return 'Enter a valid points';
    }
    } 