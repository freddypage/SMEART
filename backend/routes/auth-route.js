const express = require('express');
const router = express.router();

// ROUTES
// ==========

//some route that is only accessible if user is logged in
router.get("/secret", isLoggedIn,function(req, res) {
    //res.render("eatin");
});

// AUTH ROUTES
// ===========

// show signup form
router.get("/register", function(req, res) {
    res.render("register");
});

//handling user sign up
router.post("/register", function(req, res) {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() { //log user in, take care of everything in the session, run serializefield and use the local strategy
            res.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//render login form
router.get("/login", function(req, res) {
    res.render("login");
});

//login logic
router.post("/login", passport.authenticate("local", { //this is a middleware (code that runs before the callback)
    successRedirect: "/secret", 
    failureRedirect: "/login"
}), function(req, res) {
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

//these are standard params for a middleware. next refers to the next thing that needs to be called
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
