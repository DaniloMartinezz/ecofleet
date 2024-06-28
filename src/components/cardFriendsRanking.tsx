// src/components/CardFriendsRanking.tsx
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface Friend {
  id: number;
  name: string;
  points: number;
  correctness: number;
  avatarUrl: string;
  rankingChange: number;
}

const friendsData: Friend[] = [
  { id: 1, name: 'Ricardo Souza', points: 6367, correctness: 98, avatarUrl: 'https://randomuser.me/api/portraits/men/41.jpg', rankingChange: 1 },
  { id: 2, name: 'Paulo Manuel', points: 5894, correctness: 95, avatarUrl: 'https://randomuser.me/api/portraits/men/44.jpg', rankingChange: -1 },
  { id: 3, name: 'Giovana Beatriz', points: 6123, correctness: 96, avatarUrl: 'https://randomuser.me/api/portraits/women/64.jpg', rankingChange: 2 },
  { id: 4, name: 'Alice Silverman', points: 5432, correctness: 92, avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', rankingChange: 0 },
];

const CardFriendsRanking: React.FC = () => {
  const sortedFriends = [...friendsData].sort((a, b) => b.points - a.points);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full  md:w-[65vh] mr-5 font-inter">
      <h2 className="text-xl font-semibold mb-4">Friends Ranking</h2>
      <ul>
        {sortedFriends.map((friend, index) => (
          <li key={friend.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={friend.avatarUrl}
                alt={friend.name}
                className="mr-4 w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-800">{friend.name}</div>
                <div className="text-sm text-gray-600">
                  {friend.points} pontos - {friend.correctness}% Correto
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-lg font-bold mr-2">{index + 1}</div>
              {friend.rankingChange > 0 && <ArrowUpIcon className="w-5 h-5 text-green-500" />}
              {friend.rankingChange < 0 && <ArrowDownIcon className="w-5 h-5 text-red-500" />}
              {friend.rankingChange === 0 && <div className="w-5 h-5"></div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardFriendsRanking;
