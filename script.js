 function connect(crm) {
    if (crm === 'salesforce') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoid2F0Y2hpbmdfbGljZW50aW91cyIsIm1ldGhvZCI6IlBiZkNhcmQifSwiaWF0IjoxNzMyMTMzOTY0fQ.v46wnAdU79YoRriClvTeENDXHOfsvpXwtsPx5S2uKC8&hide_setup_guide=true', '_blank');
    } 
    if (crm === 'hubspot') {
        window.open('https://fivetran.com/connect-card/setup?redirect_uri=https://dmforce.com/success&auth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkIjp7ImxvZ2luIjp0cnVlLCJ1c2VyIjoiY2hlbWljYWxseV9wcm9mbGlnYWN5IiwiYWNjb3VudCI6InN3YXBwaW5nX3R1Y2tlZCIsImdyb3VwIjoidHJhbnNmZXJyZWRfaW5kZWxpYmxlIiwiY29ubmVjdG9yIjoidmVydGlnb19wYW5uaW5nIiwibWV0aG9kIjoiUGJmQ2FyZCJ9LCJpYXQiOjE3Mjc5OTQwMDd9.7iWjXv6abrRTLiQNaQ8vEsu3Ko5qXv384XKe4zEwYE0&hide_setup_guide=true', '_blank');
    }
    else {
        console.log('Connect function for ' + crm + ' is not implemented yet.');
    }
}
// v 0.01 08-13
