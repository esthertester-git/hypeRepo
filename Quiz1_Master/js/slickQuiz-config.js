// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "&nbsp;",
       	"main":    "instructions go here",
        "results": "&nbsp;" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What does the acronym KPI stand for?",
            "a": [
                {"option": "Key Predictive Indicator",      "correct": false},
                {"option": "Key Predictor Index",     "correct": false},
                {"option": "Key Performance Indicator",      "correct": true} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p><span>Incorrect.</span> KIP stands for Key Performance Indicator.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "What is a KPI?",
            "a": [
                {"option": "A way to assess employee behaviour",      "correct": false},
                {"option": "A synopsis of a business' digital marketing",     "correct": false},
                {"option": "A measurable value for tracking business goals",      "correct": true},
                {"option": "A look back at all the previous year's objectives",      "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p><span>Incorrect.</span> A KPI is a measurable value for tracking business goals.</p>" // no comma here
        },        
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "Which of the following refers to a KPI that focuses on past performance?",
            "a": [
                {"option": "Lagging indicator",      "correct": true},
                {"option": "Leading indicator",      "correct": false},
                {"option": "Leaning indicator",     "correct": false},
                {"option": "None of the above",      "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p><span>Incorrect.</span> Lagging indicator focus on past performance.</p>" // no comma here
        },        
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "KPIs measure financial and non-financial metrics?",
            "a": [
                {"option": "True",      "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p><span>Incorrect.</span> KPIs are a measure financial and non-financial metrics.</p>" // no comma here
        },                    
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "Which of the following is not a KPI?",
            "a": [
                {"option": "Cash Flow",      "correct": false},
                {"option": "Customer Complaints",     "correct": false},
                {"option": "Projects on Budget",      "correct": false},
                {"option": "Share Rate (Shares or ReTweets)",      "correct": false},
                {"option": "They are all KPIs",      "correct": true} // no comma here
            ],
            "correct": "<p>That's right!</p>",
            "incorrect": "<p><span>Incorrect.</span> They are all KPIs.</p>" // no comma here
        } // no comma here
    ]
};
