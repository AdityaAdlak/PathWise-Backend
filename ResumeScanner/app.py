from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz 
import re

app = Flask(__name__)
CORS(app)


with open("skills.txt", "r") as f:
    skill_keywords = [line.strip().lower() for line in f.readlines()]

def extract_text_from_pdf(pdf_bytes):
    doc = fitz.open(stream=pdf_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def extract_skills(text):
    text = text.lower()
    words = re.findall(r'\b[a-z0-9+#.]+\b', text)
    normalized_words = set(words)

    matched_skills = []

    for skill in skill_keywords:
        skill_clean = skill.lower().replace(" ", "")

        if skill_clean in normalized_words:
            matched_skills.append(skill)
        elif any(skill_clean in word for word in normalized_words):
            matched_skills.append(skill)

    return list(set(matched_skills))


@app.route("/scan-resume", methods=["POST"])
def scan_resume():
    try:
        pdf_data = request.data
        text = extract_text_from_pdf(pdf_data)
        skills = extract_skills(text)
        return jsonify({"extracted_skills": skills})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=6000)
