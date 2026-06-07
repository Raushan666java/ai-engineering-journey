# TRIES (PREFIX TREES)

## Overview
A trie (pronounced "try") is a tree-like data structure used to efficiently store and retrieve strings. Also known as a prefix tree, it organizes strings by their common prefixes, making it ideal for applications requiring fast string lookups and prefix-based operations.

## Difficulty Breakdown

### Easy Problems
1. **Trie Implementation** - Basic insert, search, startsWith operations
2. **Word Dictionary** - Simple word storage and lookup
3. **Prefix Matching** - Find all words with given prefix

### Medium Problems
4. **Word Search II** - Find words in 2D board (LeetCode 212)
5. **Replace Words** - Dictionary with root words (LeetCode 648)
6. **Design Search Autocomplete** - Autocomplete system (LeetCode 642)
7. **Map Sum Pairs** - Prefix sum queries (LeetCode 677)

### Hard Problems
8. **Concatenated Words** - Find words formed by other words (LeetCode 472)
9. **Word Break II** - All possible sentences (LeetCode 140)
10. **Palindrome Pairs** - Find pairs forming palindromes (LeetCode 336)
11. **Stream of Characters** - Query stream for words (LeetCode 1032)
12. **Maximum XOR with Queries** - Binary trie for XOR operations

## Key Concepts

### Trie Structure
- **Root Node**: Empty root representing empty string
- **Child Nodes**: Each edge represents a character
- **End of Word**: Boolean flag indicating complete word
- **Character Mapping**: Usually 26 children for lowercase English

### Operations
- **Insert**: Add word character by character, create nodes as needed
- **Search**: Traverse trie following word characters, check end flag
- **Starts With**: Traverse trie following prefix characters
- **Delete**: Remove word, clean up unused nodes (optional)

### Applications
- **Autocomplete**: Fast prefix-based suggestions
- **Spell Checking**: Dictionary lookups
- **IP Routing**: Longest prefix matching
- **T9 Predictive Text**: Phone keypad word prediction
- **DNA Sequence Analysis**: Pattern matching in bioinformatics

## Time Complexity

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Insert | O(m) | O(m) |
| Search | O(m) | O(1) |
| Starts With | O(m) | O(1) |
| Delete | O(m) | O(m) |

Where m is the length of the word/prefix

## Common Interview Questions

1. **Implement trie with insert, search, startsWith**
2. **Find all words with given prefix**
3. **Autocomplete system design**
4. **Word break problems**
5. **Longest common prefix**
6. **Replace words with roots**
7. **Count distinct substrings**
8. **Trie vs hash table comparison**
9. **Memory optimization techniques**
10. **Concurrent trie operations**

## Implementation Notes

- Use array of size 26 for English lowercase letters
- Consider using HashMap for Unicode characters
- Implement proper cleanup in delete operations
- Handle case sensitivity requirements
- Consider memory usage for large datasets
- Implement serialization for persistence

## Question Files
1. `1_trie_implementation.java` - Basic trie with insert, search, startsWith
2. `2_word_dictionary.java` - Word dictionary with addWord, search (LeetCode 211)
3. `3_prefix_matching.java` - Find all words with given prefix
4. `4_word_search_2.java` - Find words in 2D board (LeetCode 212)
5. `5_replace_words.java` - Replace words with dictionary roots (LeetCode 648)
6. `6_autocomplete_system.java` - Design search autocomplete (LeetCode 642)
7. `7_map_sum_pairs.java` - Prefix sum queries (LeetCode 677)
8. `8_concatenated_words.java` - Find concatenated words (LeetCode 472)
9. `9_word_break_2.java` - All possible sentences (LeetCode 140)
10. `10_palindrome_pairs.java` - Find palindrome pairs (LeetCode 336)
11. `11_stream_characters.java` - Query stream for words (LeetCode 1032)
12. `12_binary_trie_xor.java` - Maximum XOR with queries