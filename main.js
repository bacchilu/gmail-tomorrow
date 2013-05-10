function setUp() {
    GmailApp.createLabel("tomorrow");
}


function daily() {
    var l = GmailApp.getUserLabelByName("tomorrow");
    var threads = l.getThreads();
    GmailApp.moveThreadsToInbox(threads);
    GmailApp.markThreadsUnread(threads);
    l.removeFromThreads(threads);  
}


function tearDown() {
    daily();
    var l = GmailApp.getUserLabelByName("tomorrow");
    GmailApp.deleteLabel(l);
}