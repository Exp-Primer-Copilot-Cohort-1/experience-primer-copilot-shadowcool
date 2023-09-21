// Create web server
// 1. Import express
const express = require('express');
// 2. Create express app
const app = express();
// 3. Import comments.js
const comments = require('./comments');
// 4. Create route for /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// 5. Create route for /comments/:id
app.get('/comments/:id', (req, res) => {
    // 6. Find comment by id
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    // 7. If comment doesn't exist, return 404
    if (!comment) {
        return res.status(404).send('Comment not found');
    }
    // 8. Return comment
    res.json(comment);
});
// 9. Start server
app.listen(3000, () => console.log('Listening on port 3000...'));