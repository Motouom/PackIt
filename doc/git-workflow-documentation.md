# Git Workflow

**Branch Naming Convention:**

**- Use a consistent naming convention for your branches, such as:**
1. **feature/{feature-name}** for new feature branches.
2. **bugfix/{bug-description}** for bug fix branches.
3. **hotfix/{hotfix-description}** for critical bug fixes.
4. **release/{release-version}** for release branches.

**Branching and Merging:**

- All new development should happen in feature branches, branched off from the main branch.

- Once a feature is complete, create a pull request to merge the feature branch into the main branch.

- The main branch should always contain the latest and stable development code.

- The main branch should only contain the code for the latest stable codes.

**Commit Messages:**

- Write clear and concise commit messages that describe the changes made in the commit.

- Use the present tense and imperative mood **(e.g., "Add new feature", "Fix bug", "Refactor code")**.

- Reference the related issue or ticket number, if applicable, in the commit message.

**Collaboration and Code Reviews:**

- All code changes should be reviewed by **at least three other team member** before being merged.

- Use pull requests to facilitate code reviews and discussions.

- Encourage team members to comment on pull requests and provide feedback.

**REPOSITORY RULES**
1. Requires signed commits.
2. Requires pull request before merging.
3. Block force pushes.
4. At least 3 reviewers must approve you pull request before merging.
5. All the conversations must be resolved before one can merge the pull request.
