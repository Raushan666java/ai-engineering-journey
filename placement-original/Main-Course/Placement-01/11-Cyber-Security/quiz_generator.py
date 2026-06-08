#!/usr/bin/env python3
"""
Cyber Security Quiz Generator
Creates interactive quizzes from case study content
Supports multiple question types and difficulty levels
"""

import json
import random
import yaml
from pathlib import Path
from datetime import datetime

class QuizGenerator:
    def __init__(self, case_studies_path):
        self.case_studies_path = Path(case_studies_path)
        self.questions_bank = []
        self.load_questions()

    def load_questions(self):
        """Load questions from case study files"""
        if not self.case_studies_path.exists():
            return

        for cs_file in self.case_studies_path.glob("*.md"):
            if cs_file.name != "MASTER_CASE_STUDIES_INDEX.md":
                self.extract_questions_from_file(cs_file)

    def extract_questions_from_file(self, file_path):
        """Extract quiz questions from case study markdown"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Extract YAML metadata
            metadata = self.extract_metadata(content)

            # Extract multiple choice questions
            mc_questions = self.extract_mc_questions(content, metadata)

            # Extract short answer questions
            sa_questions = self.extract_sa_questions(content, metadata)

            self.questions_bank.extend(mc_questions + sa_questions)

        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    def extract_metadata(self, content):
        """Extract YAML metadata from content"""
        metadata = {'title': 'Unknown', 'difficulty': 'intermediate'}
        if content.startswith('---'):
            end_pos = content.find('---', 3)
            if end_pos != -1:
                yaml_content = content[3:end_pos]
                try:
                    metadata.update(yaml.safe_load(yaml_content))
                except:
                    pass
        return metadata

    def extract_mc_questions(self, content, metadata):
        """Extract multiple choice questions"""
        questions = []

        # Find the quiz section
        quiz_start = content.find('## 📝 **QUIZ')
        if quiz_start == -1:
            return questions

        quiz_content = content[quiz_start:]

        # Find multiple choice section
        mc_start = quiz_content.find('### **Multiple Choice Questions**')
        if mc_start == -1:
            return questions

        mc_content = quiz_content[mc_start:]

        # Split by numbered questions
        import re
        question_pattern = r'(\d+)\.\s*\*\*(.*?)\*\*\s*\n((?:.*?\n)*?)(?=\d+\.|###|\Z)'

        matches = re.findall(question_pattern, mc_content, re.MULTILINE | re.DOTALL)

        for match in matches:
            question_num, question_text, options_text = match

            # Parse options
            options = []
            correct_answer = None

            option_lines = options_text.strip().split('\n')
            for line in option_lines:
                line = line.strip()
                if not line:
                    continue

                # Check for option patterns
                if line.startswith('- A)') or 'A)' in line[:10]:
                    option_text = re.sub(r'^- A\)\s*', '', line).strip()
                    option_text = re.sub(r'\s*\*\*.*?\*\*\s*⭐?\s*$', '', option_text)  # Remove markers
                    option_text = re.sub(r'\s*⭐\s*$', '', option_text)  # Remove star
                    options.append(option_text.strip())
                    if '⭐' in line or '**' in line:
                        correct_answer = 'A'
                elif line.startswith('- B)') or 'B)' in line[:10]:
                    option_text = re.sub(r'^- B\)\s*', '', line).strip()
                    option_text = re.sub(r'\s*\*\*.*?\*\*\s*⭐?\s*$', '', option_text)  # Remove markers
                    option_text = re.sub(r'\s*⭐\s*$', '', option_text)  # Remove star
                    options.append(option_text.strip())
                    if '⭐' in line or '**' in line:
                        correct_answer = 'B'
                elif line.startswith('- C)') or 'C)' in line[:10]:
                    option_text = re.sub(r'^- C\)\s*', '', line).strip()
                    option_text = re.sub(r'\s*\*\*.*?\*\*\s*⭐?\s*$', '', option_text)  # Remove markers
                    option_text = re.sub(r'\s*⭐\s*$', '', option_text)  # Remove star
                    options.append(option_text.strip())
                    if '⭐' in line or '**' in line:
                        correct_answer = 'C'
                elif line.startswith('- D)') or 'D)' in line[:10]:
                    option_text = re.sub(r'^- D\)\s*', '', line).strip()
                    option_text = re.sub(r'\s*\*\*.*?\*\*\s*⭐?\s*$', '', option_text)  # Remove markers
                    option_text = re.sub(r'\s*⭐\s*$', '', option_text)  # Remove star
                    options.append(option_text.strip())
                    if '⭐' in line or '**' in line:
                        correct_answer = 'D'

            # For our case studies, the correct answer is detected from ⭐ marker
            if len(options) == 4 and correct_answer:

                questions.append({
                    'type': 'multiple_choice',
                    'question': question_text.strip(),
                    'options': options,
                    'correct_answer': correct_answer,
                    'case_study': metadata.get('title', 'Unknown'),
                    'difficulty': metadata.get('difficulty', 'intermediate'),
                    'topic': metadata.get('module', 'general')
                })

        return questions

    def extract_sa_questions(self, content, metadata):
        """Extract short answer questions"""
        questions = []
        lines = content.split('\n')

        i = 0
        while i < len(lines):
            line = lines[i].strip()

            # Look for short answer question patterns
            if '**' in line and ('?' in line or 'Explain' in line or 'Describe' in line):
                question_text = line.strip('*')

                # Look for answer pattern
                answer = ""
                j = i + 1
                while j < len(lines) and not lines[j].strip().startswith('**'):
                    if lines[j].strip() and not lines[j].strip().startswith('###'):
                        answer += lines[j].strip() + " "
                    j += 1

                if answer.strip():
                    questions.append({
                        'type': 'short_answer',
                        'question': question_text,
                        'answer': answer.strip(),
                        'case_study': metadata.get('title', 'Unknown'),
                        'difficulty': metadata.get('difficulty', 'intermediate'),
                        'topic': metadata.get('module', 'general')
                    })

                i = j
            else:
                i += 1

        return questions

    def generate_quiz(self, num_questions=10, difficulty=None, topic=None):
        """Generate a randomized quiz"""
        # Filter questions
        filtered_questions = self.questions_bank

        if difficulty:
            filtered_questions = [q for q in filtered_questions if q['difficulty'] == difficulty]

        if topic:
            filtered_questions = [q for q in filtered_questions if q['topic'] == topic]

        # Randomly select questions
        if len(filtered_questions) < num_questions:
            num_questions = len(filtered_questions)

        selected_questions = random.sample(filtered_questions, num_questions)

        # Shuffle options for multiple choice questions
        for question in selected_questions:
            if question['type'] == 'multiple_choice':
                # Remember correct answer index
                correct_idx = ord(question['correct_answer']) - 65
                correct_option = question['options'][correct_idx]

                # Shuffle options
                random.shuffle(question['options'])

                # Update correct answer letter
                new_correct_idx = question['options'].index(correct_option)
                question['correct_answer'] = chr(65 + new_correct_idx)

        quiz = {
            'title': f'Cyber Security Quiz ({num_questions} questions)',
            'generated_at': datetime.now().isoformat(),
            'questions': selected_questions,
            'total_questions': len(selected_questions)
        }

        return quiz

    def take_quiz(self, quiz):
        """Administer the quiz interactively"""
        print(f"🧠 {quiz['title']}")
        print("=" * 50)

        score = 0
        total_questions = len(quiz['questions'])

        for i, question in enumerate(quiz['questions'], 1):
            print(f"\n📋 Question {i}/{total_questions}")
            print(f"Topic: {question['case_study']} ({question['difficulty']})")
            print(f"Q: {question['question']}")

            if question['type'] == 'multiple_choice':
                print("Options:")
                for j, option in enumerate(question['options']):
                    print(f"  {chr(65+j)}) {option}")

                user_answer = input("Your answer (A/B/C/D): ").strip().upper()
                if user_answer == question['correct_answer']:
                    print("✅ Correct!")
                    score += 1
                else:
                    print(f"❌ Incorrect. Correct answer: {question['correct_answer']}")

            elif question['type'] == 'short_answer':
                print("Provide a short answer:")
                user_answer = input("> ").strip().lower()
                correct_keywords = question['answer'].lower().split()

                # Simple keyword matching
                matched_keywords = sum(1 for keyword in correct_keywords
                                     if keyword in user_answer)

                if matched_keywords >= len(correct_keywords) * 0.6:  # 60% match
                    print("✅ Good answer!")
                    score += 1
                else:
                    print(f"❌ Here's a better answer: {question['answer']}")

        print(f"\n🎯 Final Score: {score}/{total_questions} ({score/total_questions*100:.1f}%)")

        if score / total_questions >= 0.8:
            print("🏆 Excellent! You're ready for advanced topics.")
        elif score / total_questions >= 0.6:
            print("👍 Good job! Review the incorrect answers and try again.")
        else:
            print("📚 Keep studying! Focus on the case studies and try again.")

        return score

    def save_quiz(self, quiz, filename):
        """Save quiz to JSON file"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(quiz, f, indent=2, ensure_ascii=False)

    def load_quiz(self, filename):
        """Load quiz from JSON file"""
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)

def main():
    # Initialize quiz generator
    generator = QuizGenerator("/var/www/html/Placement/Placement-01/11-Cyber-Security/Case-Studies")

    print(f"📚 Loaded {len(generator.questions_bank)} questions from case studies")

    # Generate a quiz
    quiz = generator.generate_quiz(num_questions=5)

    # Save quiz
    generator.save_quiz(quiz, "cyber_security_quiz.json")

    # Take the quiz
    generator.take_quiz(quiz)

    print("\n💾 Quiz saved to cyber_security_quiz.json")
    print("🔄 Run this script again for a new randomized quiz!")

if __name__ == "__main__":
    main()