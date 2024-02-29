import test from 'ava';

import * as integer from '#module';

test('_convert_to_smaller_slow out of bound', (t) => {
	const a = [
		78_312_951, 94_374_105, 26_624_213, 56_693_695, 75_296_934, 52_733_292,
		89_892_400, 54_699_504, 48_281_904, 10_809_218, 85_508_125, 49_276_796,
		87_865_021, 72_206_610, 5_697_942, 69_159_977, 94_774_286, 21_492_437,
		39_742_495, 34_925_480, 81_393_355, 36_486_614, 23_554_825, 86_860_493,
		7_638_516, 79_195_555, 14_338_633, 4_251_794, 16_199_573, 56_267_139,
		43_815_017, 77_069_067, 65_464_041, 22_569_049, 9_250_901, 40_595_367,
		27_577_914, 385_664, 17_176_549, 25_188_154, 66_306_515, 85_000_594,
		30_136_354, 13_339_295, 80_846_790, 75_889_458, 86_325_523, 25_930_160,
		80_454_574, 5_478_079, 74_084_772, 68_678_456, 52_611_002, 86_734_364,
		67_384_514, 43_111_198, 61_749_912, 26_407_909, 12_660_282, 88_491_445,
		54_448_031, 14_651_560, 77_560_284, 52_827_888, 17_065_922, 91_075_304,
		62_456_048, 22_864_492, 57_190_597, 90_254_267, 80_332_605, 71_663_268,
		25_184_985, 64_032_247, 17_816_350, 70_011_326, 89_986_917,
	];

	const f = 94_774_286;
	const _t = 16;
	const n = a.length;
	const m = Math.ceil((Math.log(f) / Math.log(_t)) * n);
	const b = integer._zeros(m);

	integer._convert_to_smaller_slow(f, _t, a, 0, n, b, 0, m);

	t.is(undefined, b[-1]);
});
