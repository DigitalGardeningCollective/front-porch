import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Navbar()],
  footer: Component.Footer({
    links: {
      "Quartz's Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

export const noteOrEssayPageLayout: PageLayout = {
  beforeBody: [
    Component.GrowthStage(),
    Component.Title(),
    Component.Subtitle(),
    // Component.ContentMeta(),
    Component.TagList(),
    Component.Row({ 
      isSpacedBetween: true, 
      components: [
        Component.Row({ 
          isSpacedBetween: false, 
          components: [
            Component.Author(),
            Component.Contributions()
          ] 
        }),
        Component.CultivationDates()
      ]
    }),
  ],
  left: [],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ]
}

export const portfolioItemPageLayout: PageLayout = {
  beforeBody: [
    Component.Title(),
    Component.Subtitle(),
    Component.Divider(),
    Component.Grid({
      components: [
        Component.Team(),
        Component.Role(),
        Component.ToolsOrTech(),
        Component.Duration(), 
      ]
    }),
    Component.TagList(),
    Component.Divider()
  ],
  left: [
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],

}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Title(),
    Component.Subtitle(),
    Component.ContentMeta(),
    Component.Contributions(),
    Component.TagList(),
  ],
  left: [
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Title(),
    Component.Subtitle()
  ],
  left: [
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
