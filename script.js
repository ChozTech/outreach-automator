
document.getElementById('outreachForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('yourName').value.trim();
  const recipient = document.getElementById('recipientName').value.trim();
  const role = document.getElementById('jobTitle').value.trim();
  const goal = document.getElementById('outreachGoal').value;

  let messageIntro = `Hi ${recipient},\n\nMy name is ${name}, a student passionate about tech. I came across your role as a ${role} and was impressed by your journey. I’d love to connect for a short chat.`;
  let followUps = `\n\n📌 Follow-Up Options:\n- 2 days: Checking in, would love to hear from you.\n- 5 days: Loved your recent post at [Company], open to connect?\n- 8 days: Understand if busy — rooting for your journey!`;
  let objections = `\n\n❗ Objection Handling:\n"We’re not hiring" — I’m not pitching, just learning.\n"Too busy" — A short reply would already mean a lot!`;
  let callScript = `\n\n📞 Call Track:\nHey ${recipient}, this is ${name}. I’m curious about your path in tech and would love to learn — would 10 mins sometime this week work?`;

  const strategies = {
    informational: messageIntro + "\n\n🎯 Goal: Request Informational Interview" + followUps + objections + callScript,
    jobReferral: messageIntro + "\n\n🎯 Goal: Ask for a Referral" + "\nWould you be open to referring me if a role aligned?" + followUps + objections + callScript,
    resumeFeedback: messageIntro + "\n\n🎯 Goal: Request Resume Feedback" + "\nWould love 2 mins of your eyes on my resume for feedback!" + followUps + objections + callScript
  };

  document.getElementById('playbookOutput').innerText = strategies[goal] || "Please fill in all fields.";
});
