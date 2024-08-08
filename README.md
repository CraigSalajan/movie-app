# Movie App

# Notable Features
I went with the GraphQL implementation, primarily because my immediate run through
on the REST API didn't immediately have all the information available that was needed
and the documentation didn't cover very well how to retrieve it.

I also followed the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)to organize the common or reusable components.

There is an automated pipeline to deploy this site to https://craigsalajan.com. 
This pipeline runs in Azure Devops (as this is where all my personal / side projects reside).
I can walk through that pipeline if needed as well.

## Most Pleased
I was happy that i was able to take some extra time to make the page look appealing. I
was able to add some theming to the page, as well as including some flourishes with the 
cards.

## Future Plans
Given more time on development, i would like to introduce query parameters based on the 
search term, genre, page, and page size fields. This would allow for the browser forward
and backward buttons to work with the pagination, as well as allow a user to link directly
to a specific search and page if needed.

I would also like to replace Jasmine with Jest, and write a suite of unit tests  covering
these components as well.
