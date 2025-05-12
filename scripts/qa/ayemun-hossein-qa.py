import json
import re

def parse_mcq_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Find all questions blocks using regex
    question_blocks = re.findall(
        r'\*\*Q\d+:\*\*\s*(.*?)\n\nOption 1:\s*(.*?)\nOption 2:\s*(.*?)\nOption 3:\s*(.*?)\nOption 4:\s*(.*?)\n\nCorrect Answer:\s*(.*?)\n',
        content, re.DOTALL
    )

    formatted_list = []

    for q_text, opt1, opt2, opt3, opt4, answer in question_blocks:
        formatted_list.append({
            "question": q_text.strip(),
            "options": {
                "option1": opt1.strip(),
                "option2": opt2.strip(),
                "option3": opt3.strip(),
                "option4": opt4.strip()
            },
            "answer": answer.strip()
        })

    return formatted_list

def save_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# Example usage
if __name__ == "__main__":
    input_file = 'assets/dumps/QA/170+ ISC2 CC Dump Questions.md'  # Your input file with MCQ content
    output_file = 'json/170+ ISC2 CC Dump Questions.json'

    parsed_data = parse_mcq_file(input_file)
    save_json(parsed_data, output_file)

    print(f"MCQs formatted JSON saved to {output_file}")
