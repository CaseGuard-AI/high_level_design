# CaseGuard Legal Hub

Build a complete, modern, production-quality frontend web application called CaseGuard AI.

CaseGuard AI is an all-in-one legal workspace for lawyers in Pakistan. It combines legal research, citation verification, precedent analysis, case management, strategy generation, document drafting, procedural checking, opposition stress-testing, and evaluation.

The most important product differentiator is TRUST.

CaseGuard should not look like a generic AI chatbot. It should look like a professional legal SaaS platform used by lawyers.

The application should be designed as a realistic FYP project that can be demonstrated to an academic panel.

TECH STACK

Use:

React

TypeScript

Vite

Tailwind CSS

Lucide React icons

Recharts for charts

React Router for navigation

Modern responsive CSS

Component-based architecture

For this task, focus on creating a polished frontend with realistic mock data.

Do NOT build a generic landing page only. Build the actual authenticated application/dashboard experience.

BRAND

Product name:

CaseGuard AI

Tagline:

Research. Verify. Strategize. Defend.

Short product description:

An all-in-one, verifiable legal workspace for Pakistan.

Visual identity:

Professional legal-tech SaaS.

Use:

Deep navy

Dark blue

White

Very light gray backgrounds

Charcoal text

Green for verified

Amber/orange for arguable

Red for unverified

Blue for informational states

Avoid excessive gradients, excessive rounded cards, playful illustrations, cartoon graphics, and generic AI aesthetics.

The interface should feel similar to a premium enterprise SaaS product.

Use clean typography such as Inter.

CORE UX CONCEPT

Every important AI-generated legal claim must have a visible trust status.

Use these three states throughout the application:

VERIFIED

Green badge with check icon.

Meaning:
The citation matched a verified legal source.

ARGUABLE

Amber/orange badge with warning icon.

Meaning:
The citation is real, but how it applies is arguable.

UNVERIFIED

Red badge with warning/error icon.

Meaning:
The citation could not be verified and must not be presented as settled fact.

Also show source freshness:

Verified 2 days ago

Verified 12 days ago

Verified 28 days ago

Not recently reverified

Trust indicators must appear consistently across Research Hub, Strategy Builder, and Drafting Studio.

GLOBAL APPLICATION LAYOUT

Create an authenticated application layout.

LEFT SIDEBAR

Logo:

CaseGuard AI

Navigation:

Dashboard
Cases
Research Hub
Precedent Intelligence
Strategy Builder
Drafting Studio
Procedural Linter
Opposition Stress-Test
Documents
Evaluation

Bottom:

Settings
Help
User profile

Sidebar should be collapsible.

Highlight the active page.

Use Lucide icons.

TOP HEADER

Every main page should have:

Page title/breadcrumb

Global search

Notifications

User avatar

User name

Profile dropdown

Use a clean 64px-ish header.

LOGIN PAGE

Create a professional login page.

Left section:

CaseGuard AI

“Legal intelligence you can verify.”

Description:

“Research, analyze, strategize and draft with evidence-backed legal intelligence for Pakistan.”

Right section:

Login card

Fields:

Email

Password

Actions:

Remember me

Forgot password

Sign In

Also create:

Sign Up

Forgot Password

DASHBOARD

Create the main dashboard.

Header:

“Good morning, Ayesha”

Subtitle:

“Here’s what needs your attention today.”

Top statistics:

Active Cases

24

Pending Reviews

7

Verified Sources

1,284

Sources Requiring Review

18

Create professional statistic cards with icons and subtle trend indicators.

ACTIVE CASES

Create a table.

Columns:

Case
Case Number
Court
Type
Last Activity
Status
Trust

Example cases:

Ali vs. Federation
2026-CV-0182
Islamabad High Court
Civil
2 hours ago
Active
Verified

Ahmed v. State
2026-CR-0921
Lahore High Court
Criminal
Yesterday
Active
Verified

ABC Property Dispute
2025-CV-4412
Lahore High Court
Property
2 days ago
Under Review
Arguable

Make rows clickable.

RECENT ACTIVITY

Create a timeline/activity feed:

Citation verified
Document uploaded
Strategy generated
Precedent relationship reviewed
Draft procedural check completed

Each activity should include timestamp and case name.

TRUST OVERVIEW

Create a visual trust summary:

Verified
Arguable
Unverified

Use a donut chart or horizontal visualization.

Also show:

“18 sources have not been recently reverified.”

Add button:

“Review Sources”

CASES PAGE

Create a complete case management page.

Header:

Cases

Button:

New Case

Search and filters:

Search cases

All

Active

Under Review

Closed

Create a professional table/list.

Each case should show:

Case name
Case number
Court
Client
Case type
Last updated
Status
Trust status

Clicking a case opens the Case Dashboard.

CASE DASHBOARD

This is one of the most important screens.

Header:

Ali vs. Federation

Case number:
2026-CV-0182

Court:
Islamabad High Court

Status:
Active

Buttons:

Generate Strategy
Open Documents

Create tabs:

Overview
Facts
Documents
Timeline
Research
Strategy
Drafts
Opponent Claims

OVERVIEW

Create:

Case Summary

A realistic legal case summary.

Parties

Petitioner:
Muhammad Ali

Respondent:
Federation of Pakistan

Key Facts

Use structured fact cards.

Current Work

“Preparing arguments regarding validity of the challenged administrative decision.”

Key Legal Issues

List legal issues.

Opponent Claims

Show 3 claim cards.

Each claim should have:

Claim
Evidence
Legal basis
CaseGuard analysis
Trust status

RESEARCH HUB

Create a sophisticated legal research interface.

Header:

Research Hub

Large search box:

“Ask a legal question or search statutes, cases and precedents…”

Example query:

“Can an administrative order be challenged when the affected party was not given an opportunity of hearing?”

Filters:

All
Statutes
Judgments
Precedents
Case Documents

Additional filters:

Court
Jurisdiction
Date
Legal Area

RESEARCH RESULT LAYOUT

Use a two-column layout.

LEFT:

AI legal answer.

RIGHT:

Evidence & Sources.

The AI answer should contain inline citation markers such as:

[1]
[2]
[3]

Each citation must display a trust badge.

Example:

✓ VERIFIED
High confidence
Verified 12 Sep 2026

SOURCE PANEL

When clicking a citation, open a right-side drawer.

Display:

Source
Supreme Court of Pakistan

Case
Example Case v. Federation

Citation
PLD 2022 SC 123

Court
Supreme Court of Pakistan

Date
15 March 2022

Last Verified
12 September 2026

Confidence
High

Status
VERIFIED

Then:

“Why this source supports the claim”

Show the relevant passage.

Buttons:

Open Source
View Case
View Precedent Graph

For unverified citations, show:

“Unverified citation”

“This citation could not be verified and is blocked from being treated as settled fact.”

PRECEDENT INTELLIGENCE

Create a visually impressive precedent graph.

Header:

Precedent Intelligence

Search:

“Search cases or precedents…”

Main area:

Interactive-looking 2D graph.

Use nodes representing cases.

Use edges representing:

Cites
Overrules
Distinguishes
Amends

Use realistic Pakistani case names.

When clicking a node, show a side panel:

Case name
Citation
Court
Date
Current status
Last verified

Relationships:

Cites
Cited By
Overruled
Distinguishes
Related

BI-TEMPORAL VIEW

Add a timeline control:

LAW AT THE TIME
--------------------●--------------------
LAW TODAY

Allow the user to change the year and visually update the relationship information.

Show:

“Human confirmed”

on manually verified precedent relationships.

Include a legend explaining graph relationships.

STRATEGY BUILDER

Create a multi-step workflow.

Header:

Strategy Builder

Step indicator:

Case Facts

Legal Issues

Arguments

Review

CASE FACTS

Show structured facts from the selected case.

Allow editing.

LEGAL ISSUES

Cards such as:

“Whether the administrative order violates principles of natural justice.”

“Whether the authority acted beyond its statutory powers.”

GENERATED STRATEGY

Create argument cards.

Each card contains:

Argument title

Strength:
STRONG / MODERATE / WEAK

Explanation

Supporting statutes

Supporting precedents

Evidence

Trust badges

Potential weakness

Button:

View Sources

Also show:

“Why CaseGuard suggested this”

with supporting evidence.

OPPOSITION STRESS-TEST

Create a professional adversarial analysis page.

Header:

Opposition Stress-Test

Subtitle:

“Challenge your strategy before the opposing counsel does.”

Show:

Current Strategy

Then:

Opposing Arguments

Create cards:

Counterargument
Severity
Supporting authority
Why it could succeed
Recommended response

Severity levels:

High
Medium
Low

Use subtle visual differences.

Then show:

STRATEGY WEAKNESS SUMMARY

Strong Points
Vulnerabilities
Missing Evidence
Potential Counterarguments
Recommended Improvements

Button:

“Run Stress-Test”

Show a loading state before displaying results.

DRAFTING STUDIO

Create a professional legal document editor.

Three-column layout:

LEFT:
Templates

CENTER:
Document editor

RIGHT:
AI / Sources / Case Data

Templates:

Petition
Pleading
Written Statement
Application
Other

Document editor should resemble a real legal document.

Example header:

IN THE ISLAMABAD HIGH COURT

Constitutional Petition No. 2026 of 2026

Create realistic legal document formatting.

Right panel:

CASE DATA

Case number
Court
Parties
Jurisdiction

LEGAL SOURCES

Show cited statutes and precedents.

Every legal claim should have a small trust badge.

Toolbar:

Save
Preview
Version History
Run Procedural Check
Export

PROCEDURAL LINTER

Create a UI inspired by code linters but designed for legal documents.

Header:

Procedural Linter

Upload/select document.

Show:

COMPLIANCE SCORE

82%

Use a circular progress indicator.

Then checks:

✓ Court identified
✓ Case number present
✓ Parties identified
✓ Required sections present
⚠ Required affidavit may be missing
⚠ Formatting issue detected
✕ Required annexure missing

Each issue should contain:

Severity
Description
Location
Suggested fix

Buttons:

Fix Issue
Ignore
View in Document

Create green, amber and red states.

DOCUMENTS

Create document management.

Header:

Documents

Button:

Upload Document

Drag-and-drop upload area.

Supported:

PDF
DOCX
Images

Show processing pipeline:

Uploading
Parsing
Extracting Facts
Indexing
Ready

Document table:

Document
Case
Type
Pages
Uploaded
Status

Clicking a document opens a preview/details panel.

Show extracted:

Facts
People
Dates
Legal References
Claims

OPPONENT CLAIMS

Create a dedicated claims analysis view.

Each claim should display:

Opponent Claim

Source Document

Evidence

Legal Basis

CaseGuard Analysis

Counterargument

Confidence

Status

Statuses:

Supported
Weakly Supported
Contradicted
Unverified

Add filters.

EVALUATION DASHBOARD

Create an academic/research evaluation dashboard.

Header:

Evaluation Dashboard

Show four major metric cards:

Context Precision
92.4%

Context Recall
89.7%

Faithfulness
95.2%

Answer Relevance
93.1%

Use Recharts.

Create line charts showing metric changes across evaluation runs.

Create table:

Run
Date
Precision
Recall
Faithfulness
Relevance

Add:

“Run Evaluation”

button.

Also show:

TRUST PERFORMANCE

Citation verification rate
Hallucinated citation rate
Sources verified
Sources requiring review

Make this dashboard look credible for an FYP defense.

NOTIFICATIONS

Create notification dropdown/drawer.

Examples:

“Citation requires verification”
“Source has not been reverified recently”
“New judgment added”
“Procedural issue detected”
“Document processing completed”
“Strategy analysis completed”

Each notification should have timestamp and severity.

SETTINGS

Create:

Profile
Security
Notifications
Data & Privacy
Legal Sources
Verification Settings

Security page should include:

“Case data is encrypted at rest and in transit.”

“No case data is used to train external models.”

IMPORTANT INTERACTIONS

Implement realistic interactions throughout the frontend.

Examples:

Sidebar navigation works.

Tabs work.

Search fields work visually.

Filters work.

Case rows open case dashboard.

Citation badges open evidence drawers.

Precedent graph nodes can be selected.

Strategy workflow steps work.

Stress-test button shows loading then results.

Document upload shows processing state.

Procedural linter shows issues.

Buttons should have hover/focus/disabled states.

Modals and drawers should open/close correctly.

Notifications dropdown works.

Profile menu works.

Use mock data and local state where backend functionality is not available.

RESPONSIVE DESIGN

Desktop is the primary target.

Also make the UI responsive for:

Laptop
Tablet
Mobile

Desktop:
Persistent sidebar + content.

Tablet:
Collapsible sidebar.

Mobile:
Bottom/hidden navigation and drawer-based panels.

Tables should become cards on mobile.

Right-side evidence panels should become bottom/slide-up drawers on mobile.

DESIGN SYSTEM

Create reusable components:

Button
Input
SearchInput
Select
Tabs
Badge
TrustBadge
FreshnessBadge
CaseCard
CitationCard
SourceCard
StatCard
DataTable
Timeline
Alert
Modal
Drawer
DocumentCard
GraphNode
ProgressIndicator
MetricCard
EmptyState
LoadingState

Create consistent variants.

TRUST BADGE COMPONENT

Create a reusable component called:

TrustBadge

Variants:

verified
arguable
unverified

Example:

✓ Verified

⚠ Arguable

✕ Unverified

Also create:

FreshnessBadge

Examples:

Verified 2 days ago

Verified 18 days ago

Not recently reverified

UX DETAILS

Use realistic legal data instead of lorem ipsum.

Use Pakistani legal terminology.

Use examples involving:

Supreme Court of Pakistan
Lahore High Court
Islamabad High Court
Pakistan Penal Code
Code of Criminal Procedure
Code of Civil Procedure
Constitution of Pakistan

Do not claim that the mock data is real legal advice.

The UI is a prototype/demo.

OVERALL EXPERIENCE

The final application should communicate these ideas immediately:

“I can manage my entire case here.”

“I can research Pakistani law here.”

“I can see exactly where the AI got its answer.”

“I can verify every important citation.”

“I can see whether legal information is still current.”

“I can test my strategy against opposing arguments.”

“I can draft and procedurally check my document.”

The most important visual differentiator should be the Trust Layer.

Do not hide trust information inside settings.

Make verification, evidence, confidence, and freshness visible throughout the application.

Build the UI as a polished, coherent product rather than a collection of disconnected screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7717fbad-59e2-441a-bad7-f8b33d76274a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
