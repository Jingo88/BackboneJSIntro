var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("articles_data.db");

db.run("INSERT INTO articles (headline, content, author) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?)",
  'Spiderman Joins MCU', 'Basically free advertising for SONY', '4chan',
  'Shit Cosmo Says', 'If he does not say I love you on the 2nd date you should dump him', 'Cosmopolitan',
  'Lower Prostate Cancer', 'After significant studies, scientists have discovered that masturbating several times a week can help to lower the odds of prostate cancer by 40%', 'Harvard Science Group',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
