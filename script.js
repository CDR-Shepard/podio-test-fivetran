 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoiaW52aXRhdGlvbl9mb3JldmVyIiwibWV0aG9kIjoiUGJmQ2FyZCJ9LCJpYXQiOjE3Mjc5OTI1NjN9.Pa2n5nR-Qc7FpTYzVLQgE97Ay88S9YcIKRC6t8FA2Uo&hide_setup_guide=true', '_blank');
    } 
    if (crm === 'hubspot') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoiZmVtb3JhbF9waWxsIiwibWV0aG9kIjoiUGJmQ2FyZCJ9LCJpYXQiOjE3Mjc5OTM0Nzh9.2-F_-wgOjizd4YLcneQ9WkJ7hTIcDQvm5SEMPLskBzo&hide_setup_guide=true', '_blank');
    }
    else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.01 08-13
