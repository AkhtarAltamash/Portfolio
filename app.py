# # Update your Flask application

# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')  # This route handles requests to the home page
# def home():
#     return render_template('index.html')  # Render the index.html template

# @app.route('/education')  # This route handles requests to the education page
# def education():
#     return render_template('education.html')  # Render the education.html template

# @app.route('/achievements')  # This route handles requests to the achievements page
# def achievements():
#     return render_template('achievements.html')  # Render the achievements.html template

# if __name__ == '__main__':
#     app.run(debug=True)


# ____________________


from flask import Flask, request, jsonify, render_template

app = Flask(__name__, template_folder='templates')

# Define a dictionary mapping keywords to responses
responses = {
    'hello': 'Hi there! How can he assist you today?',
    'name': 'He is a Virtual Assistant here to help you with information about Muhammad Altamash Akhtar.',
    'skills': 'Throughout his career, he has developed a diverse skill set, working across multiple platforms and domains. He has extensive experience in Data Science, Data Analysis, and Data Engineering, as well as web development using Flask, Django, HTML/CSS, and JavaScript. His expertise also includes AI/ML, NLP, and Python, with a strong focus on implementing machine learning projects. Additionally, he is proficient in cloud services like AWS and database management with PostgreSQL.',
    'experience': 'He has 1 year of experience in software development, working with various technologies and frameworks.',
    'projects': 'He has worked on projects like a personal portfolio website, a chatbot application, Artificial Intelligence applications in healthcare, Data Science exploring data insights, Dental Care advancements in dentistry, Data Analysis insights from data, Automation streamlining processes, and a Voice Assistant (NLP) enhancing user experiences.',
    'contact': 'You can contact him at akhtaraltamash652@gmail.com or connect with him on LinkedIn at: (https://www.linkedin.com/in/altamash-akhtar/).\nAdditionally, you can reach him via:\nPhone: +923132842399',
    'about': 'Passionate Python Developer\nHe\'s a passionate Python developer with a knack for problem-solving. Graduated with Bachelor\'s in Computer Science, he has always been fascinated by the power of programming to create innovative solutions. With a focus on clean and efficient code, he aims to contribute positively to every project he works on. When he\'s not coding, you can find him exploring the latest trends in technology or indulging in outdoor adventures.',
    'education': 'He graduated from Indus University and his Intermediate is from Government Degree Science and Commerce College Gulshan-e-Iqbal Block#07.',
    'achievement': 'The Solar Energy Based Smart Helmet enhances rider safety with advanced sensors and an emergency button. It swiftly detects accidents and sends alerts to hospitals, ambulances, and the rider\'s contacts, providing live location for quick assistance. Additionally, he\'s been interviewed by ARY News, 92 News, Cheltey Phertey Karachi, Urdu Point, and Ary Digital.',
    'ary': 'This is his ARY interview:(https://www.youtube.com/watch?v=TPze4WtLu3M&t=8s)',
    '92': 'This is his 92 News interview:(https://www.youtube.com/@92newshdTv)',
    'Chaltey ': 'This is his Chaltey Pherty Karachi interview: (https://www.youtube.com/watch?v=l1HZxsVus8k&t=2s',
    'urdu ': 'This is his Urdu Point interview:(https://www.youtube.com/watch?v=TQSwTy0A4lY&t=1s',
    'linkedin':'This is his LinkedIn profile Link:(https://www.linkedin.com/in/altamash-akhtar/)',
    'whatsapp':'This is his whatsapp contact link:(https://api.whatsapp.com/send/?phone=923132842399&text&type=phone_number&app_absent=0)',
    'instagram':'This is his instagram link:(https://www.instagram.com/akhtaraltamash21/)',
}

# Define the chat function
def chat(message):
    message = message.lower()
    for keyword, response in responses.items():
        if keyword in message:
            return response
    # If no keyword matches, return a default response
    return 'I am not sure how to respond to that. Can you ask something else?'

# Route to render the index.html template
@app.route('/')
def home():
    return render_template('index.html')

# Route to render the education.html template
@app.route('/education')
def education():
    return render_template('education.html')

# Route to render the achievements.html template
@app.route('/achievements')
def achievements():
    return render_template('achievements.html')

# Implement the '/chat' route
@app.route('/chat', methods=['POST'])
def chat_route():
    user_input = request.json.get('message')
    response = chat(user_input)
    return jsonify({'response': response})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
