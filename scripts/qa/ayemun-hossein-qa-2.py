import json
import re

def parse_abcd_questions_multiline(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Ensure consistent line breaks
    content = content.replace('\r\n', '\n').replace('\r', '\n')

    # Regex pattern for question block
    pattern = re.compile(
        r'(\d+)\.\s+(.*?)\nA\.\s+(.*?)\nB\.\s+(.*?)\nC\.\s+(.*?)\nD\.\s+(.*?)\n\nANS:\s+([ABCD])\.\s+(.*?)(?=\n\d+\.|\Z)',
        re.DOTALL
    )

    formatted_list = []

    # Mapping of letter to option key
    letter_to_option = {
        'A': 'option1',
        'B': 'option2',
        'C': 'option3',
        'D': 'option4'
    }

    matches = pattern.findall(content)

    for match in matches:
        _, q_text, opt1, opt2, opt3, opt4, correct_letter, explanation = match

        formatted_list.append({
            "question": q_text.strip(),
            "options": {
                "option1": opt1.strip(),
                "option2": opt2.strip(),
                "option3": opt3.strip(),
                "option4": opt4.strip()
            },
            "answer": letter_to_option[correct_letter.strip()],
            "answer_explanation": explanation.strip().replace('\n', ' ')
        })

    return formatted_list

def save_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# Example usage
if __name__ == "__main__":
    input_file = 'assets/dumps/QA/70+ Additional dumps.md'  # Your input file containing the questions
    output_file = 'json/70+ Additional dumps.json'

    parsed_data = parse_abcd_questions_multiline(input_file)
    save_json(parsed_data, output_file)

    print(f"Questions with multi-line explanations saved to {output_file}")
