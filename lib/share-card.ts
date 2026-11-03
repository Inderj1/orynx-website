// What the "Share this card" button hands to the phone's share sheet.
export type ShareCard = { title: string; text: string; url: string };

type Person = { firstName: string; lastName: string; role: string };
type Org = { name: string; tagline: string };

export function shareCardData(input: { person: Person; url: string } | { org: Org; url: string }): ShareCard {
  if ("person" in input) {
    const name = `${input.person.firstName} ${input.person.lastName}`;
    return { title: `${name}, Orynx`, text: `${name}, ${input.person.role} at Orynx.`, url: input.url };
  }
  return { title: input.org.name, text: `${input.org.name}. ${input.org.tagline}.`, url: input.url };
}
