<?php

namespace App\Console\Commands;

use App\Models\Village;
use Illuminate\Console\Command;

class UpdateVillageTick extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'village:update-tick';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Runs a tick to update villages';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Village::increment('villagers');
    }
}
