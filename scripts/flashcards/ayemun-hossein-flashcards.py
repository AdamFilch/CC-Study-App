import json
import re

def parse_file_to_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Split content by chapters using regex, keep the chapter title and its block
    chapters = re.split(r'(?:##\s*\[(.*?)\]\(.*?\))', content)

    formatted_list = []

    # Skip the first split part if it's any header or empty space before the first chapter
    for i in range(1, len(chapters), 2):
        category = chapters[i].strip()
        chapter_content = chapters[i + 1]

        # Find all question-answer pairs within the chapter
        qa_pairs = re.findall(r'\d+\.\s+(.*?)\n\s*> (.*?)\n', chapter_content, re.DOTALL)

        for question, answer in qa_pairs:
            formatted_list.append({
                "category": category,
                "question": question.strip(),
                "answer": answer.strip()
            })

    return formatted_list

def save_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# Example usage
if __name__ == "__main__":
    input_file = 'assets/dumps/flashcards/200_question_answer_flashcards.md'  # Your file containing multiple chapters
    output_file = 'Ayemun_Hossein_flashcards.json'

    parsed_data = parse_file_to_json(input_file)
    save_json(parsed_data, output_file)

    print(f"Multi-chapter formatted JSON saved to {output_file}")


