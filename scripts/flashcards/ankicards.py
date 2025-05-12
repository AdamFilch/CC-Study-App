import re
import json
import argparse

def parse_term_definitions_from_markdown(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Match table-style | Term | Definition | lines
    pattern = re.compile(r'\|\s*(.+?)\s*\|\s*(.+?)\s*\|', re.MULTILINE)

    entries = []
    matches = pattern.findall(content)

    # Skip header row by assuming the first match is the header (contains 'term' or 'definition')
    if matches and ('term' in matches[0][0].lower() or 'definition' in matches[0][1].lower()):
        matches = matches[1:]

    for match in matches:
        term = match[0].strip()
        definition = match[1].strip()

        if not definition.lower().endswith(term.lower()):
            question = term
            answer = definition
        else:
            # In case the term is at the end of the definition (rare case)
            question = f"{definition.replace(term, '').strip()} What is the correct term?"
            answer = term

        entries.append({
            "question": question,
            "answer": answer
        })

    return entries


if __name__ == "__main__":
    input_file = 'assets/dumps/flashcards/ANKI-CARDS (3).md'  # Your input file containing the questions
    output_file = 'json/ANKI-CARDS (3).json'


    parsed_data = parse_term_definitions_from_markdown(input_file)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(parsed_data, f, indent=4, ensure_ascii=False)

    print(f"✅ Parsed {len(parsed_data)} entries and saved to '{output_file}'.")
