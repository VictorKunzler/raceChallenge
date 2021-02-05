import tournamentService from '../../../../src/services/tournament.service';
import tournamentRepository from '../../../../src/repository/tournament.repository';
import insertMock from '../../../helpers/insertMock';
import resetDataBaseData from '../../../helpers/resetDataBaseData';

beforeEach(async () => {
  await resetDataBaseData();
});

describe('tournamentService.getOrInsert', () => {
  describe('get existing tournament', () => {
    it('do not call insert', async () => {
      await insertMock('2021/02/03');

      const insert = jest.spyOn(tournamentRepository, 'insert');
      await tournamentService.getOrInsert({ year: 2021 });

      expect(insert).not.toBeCalled();
    });
  });

  describe('get a non existent tournament', () => {
    it('call insert', async () => {
      const insert = jest.spyOn(tournamentRepository, 'insert');
      await tournamentService.getOrInsert({ year: 2021 });

      expect(insert).toBeCalled();
    });
  });
});
