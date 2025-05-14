import { useState, useEffect } from "react";
import { Bracket, IRenderSeedProps, IRoundProps, Seed, SeedItem, SeedTeam, SeedTime } from "react-brackets";

export const CustomBrackets: React.FC<{ divisionId: number }> = ({
  divisionId,
}) => {
  console.log(divisionId)
    const teams = [
        { id: 1, name: "The Leons", score: 0 },
        { id: 2, name: "Crimson Vortex", score: 0 },
        { id: 3, name: "Phantom Reign", score: 0 },
        { id: 4, name: "Iron Howl", score: 0 },
        { id: 5, name: "Blazing Hydra", score: 0 },
        { id: 6, name: "Silent Fang", score: 0 },
        { id: 7, name: "Solar Drift", score: 0 },
        { id: 8, name: "Dark Nova", score: 0 },
        { id: 9, name: "Titan Edge", score: 0 },
        { id: 10, name: "Azure Wrath", score: 0 },
        { id: 11, name: "Frostbite Core", score: 0 },
        { id: 12, name: "Ghost Protocol", score: 0 },
        { id: 13, name: "Storm Heralds", score: 0 },
        { id: 14, name: "Echo Wardens", score: 0 },
        { id: 15, name: "Obsidian Pact", score: 0 },
        { id: 16, name: "Ember Syndicate", score: 0 }
      ];
    // TODO ADD FETCHING LOGIC
  const fetchedBrackets: IRoundProps[] = [
    {
      title: "Round of 16",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [
            { id: teams[0].id, name: teams[0].name, score: 2 },
            { id: teams[15].id, name: teams[15].name, score: 1 },
          ],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [
            { id: teams[1].id, name: teams[1].name, score: 1 },
            { id: teams[14].id, name: teams[14].name, score: 2 },
          ],
        },
        {
            id: 3,
            date: new Date().toDateString(),
            teams: [
              { id: teams[2].id, name: teams[2].name, score: 1 },
              { id: teams[13].id, name: teams[13].name, score: 2 },
            ],
          },
          {
            id: 4,
            date: new Date().toDateString(),
            teams: [
              { id: teams[3].id, name: teams[3].name, score: 1 },
              { id: teams[12].id, name: teams[12].name, score: 2 },
            ],
          },
          {
            id: 5,
            date: new Date().toDateString(),
            teams: [
              { id: teams[4].id, name: teams[4].name, score: 1 },
              { id: teams[11].id, name: teams[11].name, score: 2 },
            ],
          },
          {
            id: 6,
            date: new Date().toDateString(),
            teams: [
              { id: teams[5].id, name: teams[5].name, score: 1 },
              { id: teams[10].id, name: teams[10].name, score: 2 },
            ],
          },
          {
            id: 7,
            date: new Date().toDateString(),
            teams: [
              { id: teams[6].id, name: teams[6].name, score: 1 },
              { id: teams[9].id, name: teams[9].name, score: 2 },
            ],
          },
          {
            id: 8,
            date: new Date().toDateString(),
            teams: [
              { id: teams[5].id, name: teams[5].name, score: 1 },
              { id: teams[8].id, name: teams[8].name, score: 2 },
            ],
          }
      ],
    },
    {
        title: "Round of 8",
        seeds: [
          {
              id: 93,
              date: new Date().toDateString(),
              teams: [
                
              ],
            },
            {
              id: 39,
              date: new Date().toDateString(),
              teams: [
                
              ],
            },
            {
              id: 25,
              date: new Date().toDateString(),
              teams: [
                
              ],
            },
            {
              id: 85,
              date: new Date().toDateString(),
              teams: [
                
              ],
            }
      ]
    },
    {
        title: "Semi Finals",
        seeds: [
            {
                id: 51,
                date: new Date().toDateString(),
                teams: [
                  
                ],
              },
              {
                id: 61,
                date: new Date().toDateString(),
                teams: [
                  
                ],
              }
        ]
    },
    {
        title: "Finals",
        seeds: [
            {
                id: 51,
                date: new Date().toDateString(),
                teams: [
                  
                ],
              }
        ]
    },
  ];

  const RenderSeed = ({ seed }: IRenderSeedProps) => {
    return (
      <Seed>
        <SeedItem style={{ width: '100%' }}>
          <div>
            <SeedTeam>{seed.teams?.[0]?.name || '-----------'}</SeedTeam>
            <SeedTeam>{seed.teams?.[1]?.name || '-----------'}</SeedTeam>
          </div>
        </SeedItem>
        <SeedTime style={{ fontSize: 9 }}>{seed.date}</SeedTime>
      </Seed>
    );
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        <Bracket
          rounds={fetchedBrackets}
          renderSeedComponent={RenderSeed}
          swipeableProps={{
            enableMouseEvents: true,
            animateHeight: true,
            containerStyle: {
              display: 'flex',
              justifyContent: 'center',
            },
            slideStyle: {
              display: 'flex',
              justifyContent: 'center',
            },
          }}
        />
      </div>
    </div>
  );
};
